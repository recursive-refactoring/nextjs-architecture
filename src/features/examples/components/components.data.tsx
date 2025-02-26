import { UISearchIcon } from "@/assets/ui-icons";
import {
  MultipleAutocompleteSyncFormField,
  SingleAutocompleteSyncFormField,
} from "@/components/form-fields/autocomplete-form-fields";
import SingleCheckboxFormField from "@/components/form-fields/single-checkbox-form-field";
import TextAreaFormFields from "@/components/form-fields/text-area-form-field";
import TextFormFields from "@/components/form-fields/text-form-field";

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
    isSortable: true,
  },
  {
    accessorKey: "age",
    header: "Age",
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

export const signinFormDefaultValues = {
  email: "",
  password: "",
  message: "",
  remember: false,
  syncAutocomplete: null,
  syncMultipleAutocomplete: [],
};

export const signinFormFieldData = [
  {
    _id: 1,
    componentProps: {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      disabled: true,
      startIcon: <UISearchIcon />,
      endIcon: <UISearchIcon />,
    },
    component: TextFormFields,
  },

  {
    _id: 2,
    componentProps: {
      name: "password",
      label: "Password",
    },
    component: TextFormFields,
  },
  {
    _id: 3,
    componentProps: {
      name: "message",
      label: "Message",
    },
    component: TextAreaFormFields,
  },
  {
    _id: 4,
    componentProps: {
      name: "remember",
      label: " Remember Me",
    },
    component: SingleCheckboxFormField,
  },
  {
    _id: 5,
    componentProps: {
      name: "syncAutocomplete",
      label: "Remember Me",
      options: [
        { _id: 1, label: "1" },
        { _id: 2, label: "po" },
      ],
    },
    component: SingleAutocompleteSyncFormField,
  },
  {
    _id: 6,
    componentProps: {
      name: "syncMultipleAutocomplete",
      label: "sync Multiple",
      options: [
        { _id: 1, label: "1" },
        { _id: 2, label: "po" },
      ],
    },
    component: MultipleAutocompleteSyncFormField,
  },
  {
    _id: 7,
    componentProps: {
      name: "syncAutocomplete",
      label: "Remember Me",
      options: [
        { _id: 1, label: "1" },
        { _id: 2, label: "po" },
      ],
    },
    component: SingleAutocompleteSyncFormField,
  },
  {
    _id: 8,
    componentProps: {
      name: "syncMultipleAutocomplete",
      label: "sync Multiple",
      options: [
        { _id: 1, label: "1" },
        { _id: 2, label: "po" },
      ],
    },
    component: MultipleAutocompleteSyncFormField,
  },
  {
    _id: 78,
    componentProps: {
      name: "syncAutocomplete",
      label: "Remember Me",
      options: [
        { _id: 1, label: "1" },
        { _id: 2, label: "po" },
      ],
    },
    component: SingleAutocompleteSyncFormField,
  },
  {
    _id: 68,
    componentProps: {
      name: "syncMultipleAutocomplete",
      label: "sync Multiple",
      options: [
        { _id: 1, label: "1" },
        { _id: 2, label: "po" },
      ],
    },
    component: MultipleAutocompleteSyncFormField,
  },
];
