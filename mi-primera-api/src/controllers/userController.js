const users = [
    {
      id: 1,
      name: "Alison",
      email: "alison@mail.com",
      createdAt: "2023-01-01"
    },
    {
      id: 2,
      name: "Paola",
      email: "paola@mail.com",
      createdAt: "2023-01-01"
    },
    {
      id: 3,
      name: "Rafa",
      email: "rafa@mail.com",
      createdAt: "2023-01-01"
    }
  ]

// Index
export const indexUsers = (request, response) => {
    response
        .status(200)
        .send({
        users
        })
}

// Create New

// Read Details

// Update Edit

// Delete


