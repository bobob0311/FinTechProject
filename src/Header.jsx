import "./Header.css"

// const logoPath = "/logo.png"

export default function Header() {
    return (
        <header>
            <nav>
                <a href="#">
                    <div>
                        {/* <img src={logoPath}
                            alt="Hanium Logo"
                            width="160px" /> */}
                    </div>
                </a>
                <ul>
                    <li>
                        <a href="#">예적금 통합비교</a>
                    </li>
                    <li>
                        <a href="#">예금비교</a>
                    </li>
                    <li>
                        <a href="#">적금비교</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

};
