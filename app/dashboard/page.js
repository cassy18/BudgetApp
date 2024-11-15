import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

export const metadata = {
    title: "Budget · Dashboard"
};

export default function DashboardPage() {
    const isAuth = true;
    const children = isAuth ? <Dashboard /> : <Login />;
    return (
        <Main>
            {children}
        </Main>
    )
}