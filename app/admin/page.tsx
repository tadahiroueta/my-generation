import {
  getPrivateList,
  toggleCompleteListItem,
  deleteListItem
} from "@/app/actions";

import AdminItem from "@/components/AdminItem";
import NewItemForm from "@/components/NewItemForm";
import Stroke from "@/components/Stroke";

export default async function Home() {
  const list = await getPrivateList();

  return (
    <main className="flex w-full max-w-lg flex-col px-4 gap-8 tracking-widest">
      <div className="flex gap-2">
        <Stroke instant={true}><h1 className="text-lg">{list.length}</h1></Stroke>
        <h1 className="text-lg">{list.filter(item => !item.completed).length} things to do before graduating</h1>
      </div>
      <ul className="flex flex-col pl-8 gap-4">
        { list.map((item) => <AdminItem key={item.id} item={item} />) }
        <NewItemForm />
      </ul>
    </main>
  );
}
