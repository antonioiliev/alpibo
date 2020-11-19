import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        background: '#fff',
        padding: '70px',
        maxWidth: '1600px',
        margin: 'auto',
        '& table': {
            minWidth: '600px'
        },
        '& table th': {
            padding: 10,
            background: theme.palette.secondary.main,
            color: '#fff',
            fontSize: '14px'
        },
        '& table td': {
            fontSize: '14px'
        },
        '& span': {
            display: 'block',
            fontWeight: 900
        },
        [theme.breakpoints.down('md')]: {
            padding: '70px 20px'
        }
    },
    tableDiv: {
        overflowX: 'auto'
    },
    h2: {
        fontSize: '46px',
        textTransform: 'uppercase',
        fontWeight: 300,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px'
        }
    }
});

const PrivacyPolicyContent = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h2 className={classes.h2}>Privacy Policy</h2>
            <p>
            Alpibo is strongly committed to protecting the privacy of users of this website. We collect data on this website via:</p>

            <p><span>Google Analytics</span>
            Google Analytics is a web analysis service provided by Google Inc. (“Google”). We use this service on our website to collect standard internet log information and details of visitor behaviour patterns. We do this to make sure it’s meeting its users’ needs and to understand how we could do it better. Google Analytics stores information about what pages you visit, how long you are on the site, how you got here and what you click on. This information is only processed in a way which does not identify anyone and we do not make any attempt to find out the identities of those visiting our website.

            Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. </p>

            <p><span>Cookies</span>Cookies are small data files that are placed on your computer as you browse our website. Most websites do this too.</p>

            <p>They improve things by:</p>

            <p>remembering settings, so you don’t have to keep re-entering them whenever you visit a new page
            remembering information you’ve given (eg your postcode) so you don’t need to keep entering it
            measuring how you use the website so we can make sure it meets your needs
            Our cookies aren’t used to identify you personally. They’re just here to make the site work better for you. Indeed, you can manage and/or delete these small files as you wish. To learn more about cookies and how to manage them, visit AboutCookies.org.</p>

            <p>This table shows the Cookies we use on the site, and their purpose:</p>

            <div className={classes.tableDiv}>
                <table>
                    <thead>
                        <th style={{ width: '150px' }}>Name of Provider</th>
                        <th style={{ width: '150px' }}>Name of Cookie</th>
                        <th>Purpose</th>
                    </thead>
                    <tbody>
                        <td>Google Analytics</td>
                        <td>_ga _gat _gid</td>
                        <td>These cookies are associated with Google Universal Analytics. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports.</td>
                    </tbody>
                </table>
            </div>
            <p>If you have any questions or concerns about this, please email us at: antonio@alpibo.com</p>
        </div>
    )
};

export default withStyles(styles)(PrivacyPolicyContent);