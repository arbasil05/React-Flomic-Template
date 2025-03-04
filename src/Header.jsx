export default function Header() {
    return (
        <>
            {/* Mini header */}
            <header className="header-1">
                <div className="header-1-links">
                    <ul>
                        <li>LINK 1</li>
                        <li>|</li>
                        <li>LINK 2</li>
                        <li>|</li>
                        <li>LINK 3</li>
                        <li>|</li>
                        <li>LINK 4</li>
                        <li>|</li>
                        <li>LINK 5</li>
                    </ul>
                </div>

                <div className="header-1-phone-email">
                    <p>&#9742; +00 (123) 456 7890</p>
                    <p>&#9993; INFO@DOMAIN.COM</p>

                </div>

            </header>

            <Header_2/>
        </>

    );
}

export function Header_2() {
    return (
        <>
            <header className="header-2">
                <div className="header-2-logo">
                    <img src="./mainLogo.png" alt="Main Logo" />
                    <div className="header-2-logo-text">
                        <h1>FLOMIC</h1>
                        <h5>LOGISTICS PVT. LTD</h5>
                    </div>
                </div>
                <div className="header-2-nav-links">
                    <ul>
                        <li id='nav-links-home'>HOME</li>
                        <li>▼ PAGES</li>
                        <li>▼ DROPDOWN</li>
                        <li>LINK TEXT</li>
                        <li>LINK TEXT</li>
                    </ul>
                </div>
            </header>
        </>

    );
}