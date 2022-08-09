import React from 'react';
import {tocConfigProp} from "../controls/custom-control";

export function Button({label }) {
    return (
        <button>{label}</button>
    );
}

export const ButtonRegister = plasmicInstance => {
    plasmicInstance.registerComponent(Button, {
        name: 'OwnButton',
        displayName: 'OwnButton',
        props: {
            ...tocConfigProp(),
            label: {
                type: 'string',
                displayName: 'Label',
                defaultValue: 'Button',
            },
        },
    });
};
