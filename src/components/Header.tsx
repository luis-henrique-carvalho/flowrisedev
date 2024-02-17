import React from 'react'
import { createClient } from "@/prismicio";
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

const Header = async () => {
    const client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <header>
            <Link href="/">{settings.data.site_title}</Link>

            <nav>
                <ul className="flex">
                    {settings.data.navigation.map(({ link, label }) => (
                        <li key={label}>
                            <PrismicNextLink field={link} className="p-3">
                                {label}
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
