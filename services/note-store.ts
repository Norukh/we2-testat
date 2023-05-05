import Datastore from "nedb-promises";
import { Note } from "../models/note";

export class NoteStore {
  constructor(public db?: Datastore) {
    const options =
      process.env.DB_TYPE === "FILE"
        ? { filename: "./data/notes.db", autoload: true }
        : {};

    this.db = db || Datastore.create(options);
  }

  async save(note: Note): Promise<Note> {
    if (note._id) {
      await this.db!.update({ _id: note._id }, { $set: note });
      return this.get(note._id);
    } else {
      return (await this.db!.insert(note)) as unknown as Note;
    }
  }

  async get(id: string): Promise<Note> {
    return this.db!.findOne({ _id: id });
  }

  async all(orderBy?: string, asc = true): Promise<Note[]> {
    if (orderBy) {
      const orderByProperty = orderBy as keyof Note;
      const orderDirection = asc ? 1 : -1;

      return this.db!.find<Note>({}).sort({
        [orderByProperty]: orderDirection,
      });
    }

    return this.db!.find<Note>({});
  }

  async deleteById(id: string): Promise<number> {
    if (!id) return 0;
    return this.db!.remove({ _id: id }, { multi: false });
  }
}

export const noteStore = new NoteStore();
