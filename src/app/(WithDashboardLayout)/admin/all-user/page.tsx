import AllUser from "@/components/modules/user/AllUser";
import { getAllUser } from "@/services/User";

const AllUserPage = async () => {
  const { data } = await getAllUser();
  return (
    <div>
      <AllUser users={data} />
    </div>
  );
};

export default AllUserPage;
