import Head from "next/head";
import styles from "@/styles/Members.module.css";
// import PageTitle from "@/components/PageTitle";
import TitleScreen from "@/components/TitleScreen";
import MemberCard from "@/components/MemberCard";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { Context } from "vm";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import useScreenSize from "../../hooks/useScreenSize";
import RealisationDetail from "@/components/RealisationDetail";
import { useEffect, useState } from "react";

const DetailRealisation = ({ project }: any) => {
    const screenWidth = useScreenSize().width;
    const [firstTitleSize, setFirstTitleSize] = useState("0px")
    const [secondTitileSize, setSecondTitleSize] = useState("0px")

    useEffect(() => {
        if (screenWidth > 670) {
            setFirstTitleSize("110px")
            setSecondTitleSize("140px")
        } else {
            setFirstTitleSize("4rem")
            setSecondTitleSize("4rem")
        }
    });

    return (
        <div className="page">
            <div className={styles.pageTitleContainer} style={{ height: "20vh" }}>
                <TitleScreen
                    firstTitle={project.name}
                    secondTitle={"Nos étoiles"}
                    marginTop={"0%"}
                    marginBottom={"0%"}
                    colorFirstTitle={"white"}
                    colorSecondTitle={"#1ACAD5"}
                    sizeSecondTitle={secondTitileSize}
                    sizeFirstTitle={firstTitleSize}
                    textAlign={"center"}
                    paddingLeft={"0"}
                />
            </div>
            {project ? <RealisationDetail project={project} />

                : <div>loading</div>}
        </div>
    );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ params }: any) {
    let projectId = params.id
    const getProject = await fetchWrapper.get(`projects/${projectId}`);
    const project = await getProject.data;

    return {
        props: {
            project,
        },
    };
}

export default DetailRealisation;
