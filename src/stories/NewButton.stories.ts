import { NewButton } from "./NewButton";

export default {
    title: "Components/Botões Antd",
    component: NewButton,
    tags: ['autodocs'],
};

export const Primary = {
    args: {
        label: 'Download extrato',
        color: '#fff',
        backgroundColor: '#1982cf',
        size: 'small',
    }
}

export const Secondary = {
    args: {
        label: 'Download extrato',
        color: '#fff',
        backgroundColor: '#0ffc5e',
        size: 'large',
    }
}