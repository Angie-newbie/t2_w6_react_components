

export function PageContent({targetContent}){
    if (targetContent == "home") {
        return(
            <main>
                <h1>here</h1>
            </main>
        )
    } else {
        return(
            <main>

            
            <h1>thank you for visiting {targetContent} page </h1>
            </main>
        )
    }

    return(
        <main>

        </main>
    )
}