import Header from "./_components/Header";
import Footer from "./_components/Footer";


export default function LandingLayout({
    children,
}: {
    children: React.ReactElement;
}) {
    return (
        <main className=" h-full w-full">
            <Header />
            {children}
            <Footer />
        </main>
    );
}