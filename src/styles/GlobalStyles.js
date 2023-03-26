
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
}

a{
    color: inherit;
    text-decoration:none;
}

input, button{
    border: none;
    outline: none;
    background-color: transparent;
}

button{
    cursor: pointer;
}

.box {
    border-radius: 5px;
    position: relative;

    &::before,&::after{
        content: "";
        height: 13px;
        width: 13px;
        position: absolute;
    } 

    &::before{
        right: -3px;
        top: -3px;
        border-top: 3px solid #d3d2d2;
        border-right: 3px solid #d3d2d2;
        border-radius: 0 6px 0 0;
    }

    &::after{
        left: -3px;
        bottom: -3px;
        border-bottom: 3px solid #d3d2d2;
        border-left: 3px solid #d3d2d2;
        border-radius: 0 0 0 6px;
    }
}

.table-scroll{
    &::-webkit-scrollbar {
        height: 8px;
        margin: 20px !important;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #9e9b9b;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
}

:root{
    --border-radius-xsm:3px;
    --border-radius-sm:5px;
    --border-radius-md:10px;
    --border-radius-lg:20px;
    --border-radius-circle:50%;

    --white: #fff;

    --dark: #000;

    --light-1: #eae9ee;

    --gray-1: #9e9b9b;
    --gray-2: #5f5d5d;
    --gray-3: #616060;
    --gray-4: #808080;
    --gray-5: #e2dde4;

    --blue-1:#2802e6;
    --blue-2:#122c4d;
    --blue-3:#08192e;
    --blue-4:#5b7dab;
    --blue-5:#102237;

    --purple-1:#872ae3;
    --purple-2:#542287;
    --purple-3:#4e30e3;
    --purple-4:#8106fc;
    --purple-5:#7059d7;

    --green-1: #008000;
    --green-2: #0fb30f;
    --green-3: #0bad0b;

    --yellow-1: #c8c812;

    --red-1: #fa0707;
}
`;

export default GlobalStyles;
