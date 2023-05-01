export function prepareRequestBody(requestBody: any): any {
  return {
    title: requestBody.title,
    importance: +requestBody.importance,
    dueDate: new Date(requestBody.dueDate + "T00:00"),
    finished: !!requestBody.finished,
    description: requestBody.description,
  };
}
