import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import ContentTop from "../components/ContentTop"
import { RiLinkedinLine } from "react-icons/ri"
import { TfiTwitter } from "react-icons/tfi"
import { IoMailOutline } from "react-icons/io5"
import { BsPersonGear } from "react-icons/bs"
const Container = styled.div`
    width: 100%;
    height: auto;
    .wrapper{
        width: calc(100% - 20px);
        margin: 10px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        border-radius: var(--border-radius-md);

        .team-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid;
            border-color: ${({ theme }) => theme.mainBorderColor};

            .content-wrapper{
                display: flex;
                width: 100%;

            .team{
                width: 50%;
                height: 300px;
                display: flex;
                flex-direction: column;
                border-right: 1px solid;
                border-color: ${({ theme }) => theme.mainBorderColor};
                padding-bottom: 10px;

                .search-container{
                    width: calc(100% - 20px);
                    margin: 10px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    input{
                        width: 100%;
                        background-color: ${({ theme }) => theme.inputBgColor};
                        border: 1px solid;
                        border-color: ${({ theme }) => theme.mainBorderColor};
                        border-radius: var(--border-radius-sm);
                        padding: 10px 20px;
                        color: ${({ theme }) => theme.textColor2};
                    }
                }

                .member-list{
                    width: 100%;
                    overflow: auto;
                    padding-right: 6px;

                    &::-webkit-scrollbar {
                        width: 5px;
                        margin: 20px !important;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: var(--gray-1);
                        border-radius: var(--border-radius-md);
                    }

                    &::-webkit-scrollbar-track {
                        background-color: transparent;
                        margin-left: 2px;
                        margin-block: 2px;
                    }

                    .member{
                        padding: 10px 0 10px 10px;
                        width: calc(100% - 10px);
                        margin-left: 10px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        border-radius: var(--border-radius-sm);

                        &:hover{
                            background-color: var(--light-1);
                            background-color: ${({ theme }) => theme.hoverBgColor};
                        }

                        .img-wrapper{
                            width: 33px;
                            height: 33px;
                            margin-right: 5px;

                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: var(--border-radius-circle);
                                object-fit: cover;
                            }
                        }

                        .name{
                            font-size: 14px;
                            font-weight: 500;
                            color: ${({ theme }) => theme.mainTextColor};

                            margin-right: 5px;
                        }

                        .mail{
                            font-size: 14px;
                            color: ${({ theme }) => theme.textColor2};
                        }
                    }
                }
            }

            .member-details{
                width: 50%;
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .img-wrapper{
                    width: 75px;
                    height: 75px;
                    margin-bottom: 15px;
                    border-radius: var(--border-radius-circle);
                    padding: 2px;
                    border: 1px solid var(--blue-1);

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: var(--border-radius-circle)
                    }
                }

                .name{
                    font-size: 1.1rem;
                    font-weight: 500;
                    padding-bottom: 5px;
                    color: ${({ theme }) => theme.mainTextColor};
                }

                .position{
                    font-size: 12px;
                    font-weight: 500;
                    color: ${({ theme }) => theme.textColor2};
                    text-transform: capitalize;
                    padding-bottom: 10px;
                }

                .links{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 20px;

                    .icon-wrapper{
                        width: 30px;
                        height: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: var(--border-radius-circle);
                        background-color: var(--gray-5);
                        background-color: ${({ theme }) => theme.hoverBgColor};
                        cursor: pointer;
                        transition: .5s;

                        &:hover{
                            transform: scale(1.2);
                        }

                        .icon{
                            font-size: 1rem;
                            color: ${({ theme }) => theme.mainTextColor};
                        }
                    }
                }

                .btn-container{
                    width: 100%;
                    display: flex;
                    margin-top: auto;

                    .btn-contact{
                        width: calc(70% - 20px);
                        margin-right: 20px;
                        background-color: var(--purple-3);
                        color: var(--white);
                        padding: 8px;
                        border-radius: var(--border-radius-sm);

                    }

                    .btn-settings{
                        width: 30%;
                        background-color: var(--purple-1);
                        padding: 8px;
                        border-radius: var(--border-radius-sm);

                        svg{
                            fill: var(--white);
                            font-size: 1.2rem;
                            border-radius: var(--border-radius-sm);
                        }
                    }
                }
            }
        }
        }
    }

    @media(max-width: 760px) {
        .content-wrapper{
            flex-direction: column;
            flex-direction: column-reverse;
        }

        .team,
        .member-details{
            width: 100% !important;
        }

        .member-details{
            border-bottom: 1px solid rebeccapurple;
        }
    }
`
const Team = () => {
    const { team } = useSelector((state) => state.team)
    const [search, setSearch] = useState("")
    const [teamMembers, setTeamMembers] = useState(team)

    const [selectedMember, setSelectedMember] = useState(team[0])

    useEffect(() => {
        setTeamMembers(team.filter((item) => {
            return item.name.toLowerCase().includes(search)
        }))

        // eslint-disable-next-line
    }, [search])

    return (
        <Container>
            <div className="wrapper">
                <div className="team-container box">
                    <ContentTop text={"Your team"} btnText={"Send Message"} />
                    <div className="content-wrapper">
                        <div className="team">
                            <div className="search-container">

                                <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <ul className="member-list">
                                {teamMembers.map((item) => (
                                    <li key={item.id} className="member" onClick={() => setSelectedMember(item)}>
                                        <div className="img-wrapper">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="name">{item.name}</div>
                                        <div className="mail">{item.mail}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="member-details">
                            <div className="img-wrapper">
                                <img src={selectedMember.img} alt={selectedMember.name} />
                            </div>

                            <div className="name">{selectedMember.name}</div>
                            <div className="position">{selectedMember.position}</div>
                            <div className="links">
                                <div className="icon-wrapper">
                                    <IoMailOutline className="icon" />
                                </div>
                                <div className="icon-wrapper">
                                    <RiLinkedinLine className="icon" />
                                </div>
                                <div className="icon-wrapper">
                                    <TfiTwitter className="icon" />
                                </div>
                            </div>
                            <div className="btn-container">
                                <button className="btn-contact">Contact</button>
                                <button className="btn-settings"><BsPersonGear /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Team