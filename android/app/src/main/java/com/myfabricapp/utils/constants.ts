package com.myfabricapp.utils;

export interface Group {
    logo: string;
    name: string;
    numOfMember: number;
}

export const GROUPS: Group[] = [
    { logo: 'logo1.png', name: 'Group One', numOfMember: 10 },
    { logo: 'logo2.png', name: 'Group Two', numOfMember: 20 },
    { logo: 'logo3.png', name: 'Group Three', numOfMember: 15 },
    { logo: 'logo4.png', name: 'Group Four', numOfMember: 25 },
    { logo: 'logo5.png', name: 'Group Five', numOfMember: 30 }
];