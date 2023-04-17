import {SelectedPage} from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    children:React.ReactNode;
};
const ActionButton = ({setSelectedPage, children }: Props) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 text-white"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;