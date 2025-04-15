import React from "react";
import Link from "next/link";
import styles from "./ResearchProject.module.css";

const ResearchProject = () => {
  return (
    <div>
      <div className={styles.projectHead}>
        <Link href="https://tarupublications.com/doi/10.47974/JDMSC-1733" className={styles.projectHeadLink}>
          <h2 className="w100">A blockchain-based private framework for facilitating digital forensics using IoT</h2>
        </Link>
      </div>

      <div className={styles.projectSubHead}>
        <h3 className="w300">Published Research Paper:&nbsp;</h3>
        <Link href="https://tarupublications.com/doi/10.47974/JDMSC-1733" className={styles.projectLink}>
          <h3 className="w300">https://tarupublications.com/doi/10.47974/JDMSC-1733</h3>
        </Link>
      </div>

      <div className={styles.projectBody}>
        <h3 className="w300">
          As a part of my undergraduate program, I worked on a research project where I created a blockchain from
          scratch and built a database management system using the blockchain to store digital evidence for criminal forensics.
        </h3>

        <div className={styles.projectSubHead}>
          <Link href="https://tarupublications.com/doi/10.47974/JDMSC-1733" className={styles.projectLink}>
            <h3 className="w300">Read more about it here...</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResearchProject;
