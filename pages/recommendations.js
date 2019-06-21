import {useState} from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AdviceSnippetGrid from '../components/AdviceSnippetGrid'
import Recommendations from '../components/Recommendations'
import CentredText from '../components/CentredText'
import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'

const RecommendationsPage = ({snippets, services, query}) => {

    const [servicesState, changeServices] = useState(services)
    return(
        <Layout withHeader>
            <PageHeader 
                reducedBottomPadding
                breadcrumbs={[
                    {
                        title: "Care for adults",
                        href: "/"
                    },
                    {
                        title: "Services in your area"
                    },
                ]}
                title="Your recommendations"
                />

            <button onClick={()=>{

                changeServices([{
                    name: "duuuh"
                }].concat(servicesState))

            }}>clear list</button>

            <Recommendations 
                snippets={snippets}
                services={servicesState} 
                query={query}
                />
            <CentredText
                title="Is anything missing?"
                description="If you’re the organiser, of a club, activity or group that isn’t on this list, you can request it be added."
                />
        </Layout>
    )

}
    

RecommendationsPage.getInitialProps = async ({req, query}) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';    
    const endpoints = [
        `${baseUrl}/api/services?${queryString.stringify(query)}`,
        `${baseUrl}/api/snippets?${queryString.stringify(query)}`
    ]
    let promises = await Promise.all(endpoints.map(endpoint =>
        fetch(endpoint).then(res => res.json())
    ))
    let [services, snippets] = promises
    return {
        services: services.results,
        snippets: snippets.results,
        query: query
    }

}

export default RecommendationsPage