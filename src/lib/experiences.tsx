import Link from "next/link";

export const experiences = [
  {
    title: 'Fullstack Engineer',
    description: (
      <>
        08/2022 - 07/2023: Primarily worked on the product Enhance Ai as part of
        an augmented procurement platform. Enhance Ai offers benefits such as
        elevating data-driven decision making, supporting strategic buying with
        advanced search capabilities, and seamless integration with existing
        backend systems and data sources.
      </>
    ),
    link: 'https://www.procure.ai/',
    linkText: '@ProcureAi_Ltd',
  },
  {
    title: 'Frontend Engineer',
    description: (
      <>
        11/2020 - 05/2022: Primarily worked on a content-management web
        application for internal marketing and sales teams with thousands of
        users.
        <br></br>
        In addition worked on a futuristic presentation creation tool which
        enables users to easily create professional looking slides.
      </>
    ),
    link: 'https://www.sap.com/',
    linkText: '@SAP_SE',
  },
  {
    title: 'Chief Automation Officer',
    description: (
      <>
        2019 - today: I&apos;ve been working on several projects. My current
        ventures are listed here{' '}
        <Link
          className="text-palatinate_blue hover:text-azure transition duration-300"
          href="https://wupperfeld.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          (wupperfeld.org)
        </Link>
        .<br></br>
        An agency specializing in ai-solutions & automation.
        <br></br>A volunteering app (under development).
      </>
    ),
    link: '/',
    linkText: '@TobiasWupperfeld',
  },
];
