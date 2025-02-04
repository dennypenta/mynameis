import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="dennypenta/mynameis"
            repoId="R_kgDOK5AhRA"
            category="General"
            categoryId="DIC_kwDOK5AhRM4CmpHF"
            mapping="pathname"
            strict="0"
            reactionsEnabled="0"
            emitMetadata="0"
            inputPosition="top"
            theme={colorMode}
            lang="en"
            loading="lazy"
            crossorigin="anonymous"
            async
        />
    );
}
