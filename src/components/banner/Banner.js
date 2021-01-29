import { useState } from 'react';
import Container from '../../layouts/container';
import { Banner } from './styles';
import ArticleA from '../articleA/ArticleA';

export default function () {
    const [bannerArticles, setBannerArticles] = useState([
        {
            title: 'Top 10 Data Catalog Software Solutions',
            tag: 'Big Data',
            imgURL: '/images/data-catalog.jpg',
        },
        {
            title: 'Qualcomm’s AI-Driven Video Compression And Ensuring that AI’s Do No Evil',
            tag: 'AI',
            imgURL: '/images/qualcomm-vector-logo.png',
        },
        {
            title: 'Top Kubernetes Management Platforms',
            tag: 'Cloud',
            imgURL: '/images/3-31510_svg-kubernetes-logo-hd-png-download-696x664.png',
        },
        {
            title: 'The Promise And Threat of a Tech-Driven Future: Best Keynote Of CES 2021',
            tag: 'AI',
            imgURL: '/images/ces-2021-digital-venue_600x335.jpg',
        },
        {
            title: 'HPE Greenlake and the Future of IT as a Service',
            tag: 'Big Data',
            imgURL: '/images/HPE-GreenLake-logo.jpg',
        },
    ]);

    return (
        <Container>
            <Banner>
                <div className="banner-left">
                    <ArticleA article={bannerArticles[0]} />
                    <ArticleA article={bannerArticles[1]} />
                </div>
                <div className="banner-right">
                    <ArticleA article={bannerArticles[1]} />
                    <ArticleA article={bannerArticles[1]} />
                    <ArticleA article={bannerArticles[1]} />
                </div>
            </Banner>
        </Container>
    )
}