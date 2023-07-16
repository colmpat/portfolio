const Category: React.FC<{
  title: string;
  children?: React.ReactNode;
}> = ({ title: category, children }) => {
  return (
    <div id={category.toLowerCase()} className="flex flex-col max-w-[1200px] m-auto pt-20">
      <h3 className="text-lg text-fgMuted">Category</h3>
      <h2 className="font-extrabold text-5xl mb-12 text-fgDefault">{category}</h2>
      <hr/>
      {children && children}
    </div>
  );
};

export default Category;
