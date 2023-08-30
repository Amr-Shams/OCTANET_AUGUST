import Sidebar from ./layout/Sidebar";
interface Layout Props {
children: React. ReactNode;
}
const Layout: React. FC<Layout Props>= ({ children }) {
return (
<div className="h-screen Obg-black">
<div className="container h-full mx-auto xl: px-30 max-w-6xl">
<div className="grid grid-cols-4 h-full">
<Sidebar />
<div className="
col-span-31
lg:col-span-2
border-x-[1px]
Oborder-neutral-800
{children}
</div>
</div>
</div>
</div>
);
}
export default Layout;