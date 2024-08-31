import styled from "styled-components";
const ContactStyle = styled.div`
margin-top: 5em;

button {
    background: none;
    border: none;
    font-size: max(4vw, 1em);
    color: var(--primary);
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
}
    
    .contact{
        padding: var(--section-heading-padding);
        background: var(--secondary);
        color: var(--primary);

        a{
            color: var(--primary);;
            font-size: max(4vw, 1em);

            img {
                width: 0.8em;
                height: 0.8em;
            }
        }

        .contact_social_icon{
            margin-top: 3em;
            display: flex;
            gap: 3em;
            flex-wrap: wrap;
            svg{
                font-size: max(3vw, 2rem);

            }

        }
        .contact_menu_link{
            margin-top: 5em;
            display: flex;
            flex-direction: column;
            gap: 1em;        
            a{
                font-size: max(1.5vw, 16px);
            }
        }


    }

    .contact_moivng_text_footer{
            width: 100vw;
            height: max-content;
            position: relative;
            padding: 1em 0;
            overflow: hidden;
        }

@media only screen and (max-width: 700px){
    a{
        font-size: 5vw;
    }

    .contact_social_icon{
        svg{
            font-size: 8vw;

        }

    }
}

`;

export default ContactStyle;