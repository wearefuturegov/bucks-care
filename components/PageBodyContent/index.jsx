import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Link from "next/link"

const Outer = styled.div`
    padding: 40px 20px;
    @media screen and (min-width: ${theme.tablet}){
        padding: 60px 20px;
    }
    @media screen and (min-width: ${theme.desktop}){
        padding: 80px 20px;
    }
`

const Columns = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: ${theme.tablet}){
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-column-gap: 80px;
    }
`

const ContentArea = styled.article`
    margin-bottom: 30px;
    @media screen and (min-width: ${theme.tablet}){
        margin-bottom: 0px;
    }

    /* Inner content styling */
    p{
        color: ${theme.darkText};
        margin-bottom: 20px;
        line-height: 1.6;
        font-size: 1em;
        @media screen and (min-width: ${theme.desktop}){
            font-size: 1.1em
        }
    }
    h2, h3, h4, h5, h6{
        margin-top: 35px;
        color: ${theme.darkText};
        margin-bottom: 15px;
    }
    *:first-child{
        margin-top: 0px !important;
    }
    a{
        color: ${theme.link};
        font-weight: bold;
        &:hover{
            text-decoration: none;
        }
        &:focus{
            outline: 3px solid ${theme.focus};
            background: ${theme.focus};               
        }
    }

`

const SidebarHeadline = styled.h2`
    color: ${theme.darkText};
    margin-bottom: 15px;
    font-size: 1.2em;
    border-top: 2px solid ${theme.shadow};
    padding-top: 5px;
`

const SidebarList = styled.ul`
    list-style: none;
    font-size: 1em;
    color: ${theme.darkText};
`

const SidebarItem = styled.li`
    margin-bottom: 10px;
`

const SidebarLink = styled.a`
    color: ${theme.link};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};               
    }
`


const PageBodyContent = ({
    sidebarItems,
    children
}) =>
    <Outer>
        <Columns>
            <ContentArea>{children}</ContentArea>
            <aside>
                <SidebarHeadline>Related content</SidebarHeadline>


                <SidebarList>
                    {sidebarItems.map(item => 
                        <SidebarItem>
                            {item.href ? <Link href={item.href}><SidebarLink href={item.href}>{item.label}</SidebarLink></Link> : item.label}
                        </SidebarItem>
                    )}
                </SidebarList>


            </aside>
        </Columns>
    </Outer>


export default PageBodyContent