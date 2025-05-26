import AllUser from "@/components/modules/admin/user/AllUser";
import { getAllUser } from "@/services/User";
import { cookies } from "next/headers";

const AllUserPage = async () => {
  const token = (await cookies()).get("accessToken")!.value;
  const { data } = await getAllUser(token);
  return (
    <div>
      <AllUser users={data} />
    </div>
  );
};

export default AllUserPage;
