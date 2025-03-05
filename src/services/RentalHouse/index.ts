export const getAllRentalHouse = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/listings`,
      {
        next: {
          tags: ["RentalHouses"],
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
