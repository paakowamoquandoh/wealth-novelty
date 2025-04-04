export const userColumns = [
  {
    field: "user",
    headerName: "User",
    width: 150,
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
    field: "address",
    headerName: "Address",
    width: 180,
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
    field: "licenseNo",
    headerName: "Driver License",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
];

export const hotelColumns = [
  {
    field: "name",
    headerName: "Name",
    width: 120,
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
    field: "model",
    headerName: "Model",
    width: 100,
  },
  {
    field: "forSale",
    headerName: "For Sale",
    width: 100,
  },
  {
    field: "colour",
    headerName: "Colour",
    width: 100,
  },
  {
    field: "city",
    headerName: "Available in",
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
  {
    field: "vin",
    headerName: "VIN",
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
    field: "name",
    headerName: "Car",
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
    field: "carNumber",
    headerName: "Car Number",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];