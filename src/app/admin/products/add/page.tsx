// "use client";

// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import AdminInput from "@/components/admin/AdminInput";
// import ImageUploadGrid from "@/components/admin/ImageUploadGrid";

// type Category = {
//   id: number;
//   name: string;
// };

// export default function AddProductPage() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [images, setImages] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetch("/api/categories")
//       .then(res => res.json())
//       .then(setCategories)
//       .catch(() =>
//         toast.error("Failed to load categories")
//       );
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (images.length === 0) {
//       toast.warning("Please upload at least one image");
//       return;
//     }

//     setLoading(true);

//     const form = e.target as HTMLFormElement;

//     const payload = {
//       name: form.productName.value.trim(),
//       description: form.description.value.trim(),
//       categoryId: Number(form.categoryId.value),
//       images,
//     };

//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to create product");
//       }

//       toast.success("Product created successfully ✨");

//       form.reset();
//       setImages([]);
//     } catch (err) {
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f6f6f4] py-16 mt-5">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-4xl font-serif italic text-[#2e2e2e]">
//             Add Product
//           </h1>
//           <p className="mt-2 text-sm text-gray-500">
//             Create a new furniture product and upload its images
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="
//             bg-white
//             rounded-2xl
//             border
//             border-gray-200
//             shadow-sm
//             p-10
//             space-y-10
//           "
//         >
//           {/* Basic Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <AdminInput label="Product Name">
//               <input
//                 name="productName"
//                 required
//                 placeholder="Eg. Solid Wood Dining Table"
//                 className="admin-input"
//               />
//             </AdminInput>

//             <AdminInput label="Category">
//               <select
//                 name="categoryId"
//                 required
//                 className="admin-input"
//               >
//                 <option value="">Select category</option>
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//             </AdminInput>
//           </div>

//           {/* Description */}
//           <AdminInput label="Description">
//             <textarea
//               name="description"
//               rows={4}
//               required
//               placeholder="Describe materials, finish, craftsmanship..."
//               className="admin-input resize-none"
//             />
//           </AdminInput>

//           {/* Images */}
//           <div className="pt-6 border-t">
//             <AdminInput label="Product Images">
//               <p className="text-sm text-gray-500 mb-3">
//                 Upload multiple images (recommended: 5–8 per product)
//               </p>
//               <ImageUploadGrid onImagesChange={setImages} />
//             </AdminInput>
//           </div>

//           {/* Submit */}
//           <div className="pt-4 flex justify-end">
//             <button
//               disabled={loading}
//               className="
//                 bg-black
//                 text-white
//                 px-8
//                 py-3
//                 rounded-full
//                 tracking-wide
//                 hover:opacity-90
//                 transition
//                 disabled:opacity-60
//               "
//             >
//               {loading ? "Saving…" : "Create Product"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import AdminInput from "@/components/admin/AdminInput";
import ImageUploadGrid from "@/components/admin/ImageUploadGrid";

type Category = {
  id: number;
  name: string;
};

export default function AddProductPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔑 used to reset ImageUploadGrid
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(setCategories)
      .catch(() =>
        toast.error("Failed to load categories")
      );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (images.length === 0) {
      toast.warning("Please upload at least one image");
      return;
    }

    setLoading(true);

    const form = e.target as HTMLFormElement;

    const payload = {
      name: form.productName.value.trim(),
      description: form.description.value.trim(),
      categoryId: Number(form.categoryId.value),
      images,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      toast.success("Product created successfully ✨");

      // ✅ FULL RESET (form + images + previews)
      form.reset();
      setImages([]);
      setResetKey(prev => prev + 1);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f6f4] py-16 mt-5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-serif italic text-[#2e2e2e]">
            Add Product
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create a new furniture product and upload its images
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            shadow-sm
            p-10
            space-y-10
          "
        >
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AdminInput label="Product Name">
              <input
                name="productName"
                required
                placeholder="Eg. Solid Wood Dining Table"
                className="admin-input"
              />
            </AdminInput>

            <AdminInput label="Category">
              <select
                name="categoryId"
                required
                className="admin-input"
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </AdminInput>
          </div>

          {/* Description */}
          <AdminInput label="Description">
            <textarea
              name="description"
              rows={4}
              required
              placeholder="Describe materials, finish, craftsmanship..."
              className="admin-input resize-none"
            />
          </AdminInput>

          {/* Images */}
          <div className="pt-6 border-t">
            <AdminInput label="Product Images">
              <p className="text-sm text-gray-500 mb-3">
                Upload multiple images (recommended: 5–8 per product)
              </p>
              <ImageUploadGrid
                key={resetKey} // 🔥 forces fresh mount
                onImagesChange={setImages}
              />
            </AdminInput>
          </div>

          {/* Submit */}
          <div className="pt-4 flex justify-end">
            <button
              disabled={loading}
              className="
                bg-black
                text-white
                px-8
                py-3
                rounded-full
                tracking-wide
                hover:opacity-90
                transition
                disabled:opacity-60
              "
            >
              {loading ? "Saving…" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
