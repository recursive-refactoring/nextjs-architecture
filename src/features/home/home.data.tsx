export const columnsDynamic = [
  {
    accessorKey: "firstName",
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row.lastName,
    id: "lastName",
    cell: (info: any) => info.getValue(),
    header: "Last Name",
    sortUndefined: "last",
    sortDescFirst: false,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    columns: [
      {
        accessorKey: "visits",
        header: () => <span>Visits</span>,
        sortUndefined: "last",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
  },
  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
    sortUndefined: "last",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
  {
    accessorKey: "rank",
    header: "Rank",
    invertSorting: true,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

export const data = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    visits: 3,
    rank: "hi",
    status: "Active",
  },
];
