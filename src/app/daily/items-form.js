'use client'
import { useState, useEffect } from 'react';
import { deleteDailyItem, getTodayDailyItems, postDailyItem } from "../api/daily"
import H2 from "../components/common/h2";
import UnderlineInput from "../components/common/underline-input";
import ExpandIcon from "./expand-icon";
import TextArea from '../components/common/textarea';
import Button from '../components/common/button';
import toast from '../common/toast';
import DailyItemCard from './daily-item-card';

export default function DailyItemForm() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await getTodayDailyItems();
    setItems(data.data);
  };

  const deleteItem = async (id) => {
    await deleteDailyItem(id);
    await fetchItems()
  }

  useEffect(() => { fetchItems() }, []);
  return (<div>
    <DailyItemEditor onPost={fetchItems}></DailyItemEditor>
    <div className="space-y-2 mt-2">
      {items.map((item, index) => (
        <DailyItemCard key={index} onDelete={() => { deleteItem(item.id) }} content={item.content} description={item.description} />
      ))}
    </div>
  </div>)
}


export function DailyItemEditor({ onPost }) {
  const [showDescriptionField, setShowDescriptionField] = useState(false);
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const clickPostDailyItem = async () => {
    if (!content) {
      toast("内容不能为空")
      return;
    }
    const res = await postDailyItem(content, description);
    if (res.code == 200) {
      setContent("");
      setDescription("");
      toast("成功")
      onPost();
    }
  }

  return (
    <div>
      <H2>事项</H2>
      <div className="flex items-center">
        <div onClick={() => setShowDescriptionField(!showDescriptionField)}>
          <ExpandIcon className={`${!showDescriptionField && '-rotate-90'} mr-2`} />
        </div>
        <UnderlineInput value={content} onChange={(e) => setContent(e.target.value)} placeHolder="内容" />
        <Button onClick={clickPostDailyItem} color="transparent" className="w-20 mx-5">提交</Button>
      </div>
      {showDescriptionField && (
        <TextArea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-2" placeHolder='描述' />
      )}
    </div>
  );
}
