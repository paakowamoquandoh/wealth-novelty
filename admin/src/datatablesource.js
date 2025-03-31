export const userColumns = [
  { field: "_id", headerName: "ID", width: 80 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "idType",
    headerName: "ID Type",
    width: 100,
  },
  {
    field: "idNumber",
    headerName: "ID Number",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 50 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "condition",
    headerName: "Car Condition",
    width: 100,
  },
  {
    field: "title",
    headerName: "Model",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "year",
    headerName: "Year",
    width: 100,
  },
  {
    field: "distance",
    headerName: "Mileage",
    width: 100,
  },
  {
    field: "engine",
    headerName: "Engine",
    width: 100,
  },
  {
    field: "transmission",
    headerName: "Transmission",
    width: 100,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "title",
    headerName: "Available for",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price Per Day",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];