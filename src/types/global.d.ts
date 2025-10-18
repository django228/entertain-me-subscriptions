declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png';
declare module '*.jpg';

declare module '*.json' {
    const value: any;
    export default value;
}

declare const __IS_DEV__: boolean;
