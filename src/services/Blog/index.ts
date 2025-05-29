"use server";

export const getBlogData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/published-blogs`,
      {
        next: { tags: ["blogs"] },
      }
    );

    return res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
};

export const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`, {
      next: { tags: ["blogs"] },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
};
