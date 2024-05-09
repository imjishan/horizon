import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Jishan" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions effieciently"
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.43}
          />
        </header>
      </div>
    </section>
  );
};
export default Home;
