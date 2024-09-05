export type IntegrationTest = {
  component: string | null;
  createdAt: Date;
  id: string;
  result?: "Option1" | null;
  testedAt: Date | null;
  updatedAt: Date;
};
