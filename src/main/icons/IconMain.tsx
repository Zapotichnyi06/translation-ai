import React, { FC, memo } from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const IconMain: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    );
});

IconMain.displayName = "IconMain";

export const XIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
});

XIcon.displayName = "XIcon";

export const MenuIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
});

MenuIcon.displayName = "MenuIcon";

export const SearchIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    )
});

SearchIcon.displayName = "SearchIcon";

export const ChevronLeftIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
});

ChevronLeftIcon.displayName = "ChevronLeftIcon";

export const ChevronRightIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
});

ChevronRightIcon.displayName = "ChevronRightIcon";

export const MaximizeIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
    )
});

MaximizeIcon.displayName = "MaximizeIcon";

export const ZoomInIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
            <line x1="11" x2="11" y1="8" y2="14" />
            <line x1="8" x2="14" y1="11" y2="11" />
        </svg>
    )
});

ZoomInIcon.displayName = "ZoomInIcon";

export const ZoomOutIcon: FC<IconProps> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
            <line x1="8" x2="14" y1="11" y2="11" />
        </svg>
    )
});

ZoomOutIcon.displayName = "ZoomOutIcon";

export const InstagramIcon: FC<IconProps> = memo((props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6e6e77"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
));

InstagramIcon.displayName = "InstagramIcon";

export const TikTokIcon: FC<IconProps> = memo((props) => (
    <svg  {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29" id="tik-tok">
        <path fill="#6e6e77"
              d="M25 6h-1c-1.103 0-2-.897-2-2V3a1 0 0 0 0-1-1h-4a1 1 0 0 0-1 1v17.5c0 1.378-1.121 2.5-2.5 2.5S11 21.878 11 20.5s1.121-2.5 2.5-2.5c.089 0 .168-.029.25-.05.082.021.161.05.25.05a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1c-.089 0-.168.029-.25.05-.082-.021-.161-.05-.25-.05C8.813 12 5 15.813 5 20.5S8.813 29 13.5 29c4.461 0 8.124-3.457 8.466-7.832.01-.057.034-.109.034-.168v-9.338c1.554.529 3.049.34 3.132.329A1 1 0 0 0 26 11V7a1 1 0 0 0-1-1zm-1 4.023c-.688-.039-1.647-.21-2.368-.798A1 1 0 0 0 20 10v10.5c0 3.584-2.916 6.5-6.5 6.5S7 24.084 7 20.5c0-3.415 2.649-6.218 6-6.475v2.025c-2.244.252-4 2.139-4 4.449 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5V4h2c0 2.206 1.794 4 4 4v2.023z"
              className="color231f20 svgShape"></path>
    </svg>
));

TikTokIcon.displayName = "TikTokIcon";

export const MoonIcon: FC<IconProps> = memo((props) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
));

MoonIcon.displayName = "MoonIcon";

export const SunIcon: FC<IconProps> = memo((props) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
));

SunIcon.displayName = "SunIcon";
