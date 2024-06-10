// Fichiers pour les types du TypeScript

export type ChildrenType = {
    children: React.ReactNode;
}

export type CTAType = {
    children: React.ReactNode,
    onClick : (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export type InputType={
    label: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type:string,
    required:boolean,
    placeholder:string,
}