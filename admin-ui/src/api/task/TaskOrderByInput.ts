import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedToId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  estimation?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
