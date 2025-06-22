export const paginateData = <T>(payload: IPayload<T>) => {
  return payload.data.slice(
    (payload.currentPage - 1) * payload.itemsPerPage,
    payload.currentPage * payload.itemsPerPage
  );
};

interface IPayload<T> {
  data: T[];
  currentPage: number;
  itemsPerPage: number;
}
