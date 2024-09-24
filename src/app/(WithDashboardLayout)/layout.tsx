import Sidebar from "@/components/ui/Sidebar";


const DashboardLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
};

export default DashboardLayout;
