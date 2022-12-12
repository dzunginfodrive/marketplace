import * as React from 'react';
import Head from 'next/head'
import Navbar from '../components/navbar'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from '@mui/material/Avatar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Link from '@mui/material/Link';

export default function Home({ allPostsData }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div >
      <Head>
        <Navbar/>
      </Head>
      <div className="homePage">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} sectionBox`}>
          <h2 className={utilStyles.headingLg}>Discover and collect in <br/> extraordinary NFT marketplace</h2>
          <p>Our technical performing fast blockchain and it has guaranteed AI - based data security.</p>
          <button className="customButton">Get started</button>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} sectionBox`}>
          <h2 className={utilStyles.headingLg}>Trusted And Secure NFT Platform</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px } sectionBox cardBox featuredBox`}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Avatar
                alt="Remy Sharp"
                src="images/default.png"
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Lorem Ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Avatar
                alt="Remy Sharp"
                src="images/default.png"
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Lorem Ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Avatar
                alt="Remy Sharp"
                src="images/default.png"
                sx={{ width: 65, height: 65, marginLeft: 2 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Lorem Ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Box>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} sectionBox meetTeamSection`}>
          <h2 className={utilStyles.headingLg}>Meet <br/> Our Team</h2>
          <p>simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px } sectionBox meetTeamSection cardBox`}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image="images/default.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sarah Smith
                </Typography>
                <p>CEO</p>
                <Typography variant="body2" color="text.secondary">
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
                <br/>
                <LinkedInIcon/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image="images/default.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sarah Smith
                </Typography>
                <p>CEO</p>
                <Typography variant="body2" color="text.secondary">
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
                <br/>
                <LinkedInIcon/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image="images/default.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sarah Smith
                </Typography>
                <p>CEO</p>
                <Typography variant="body2" color="text.secondary">
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
                <br/>
                <LinkedInIcon/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Box>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px } sectionBox discoverNFT`}>
        <TabContext value={value}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <h2 className={utilStyles.headingLg}>Discover NFT</h2>
                </Grid>
                <Grid item xs={8} className="discoverNFTTabs">
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Category" value="1" />
                  <Tab label="Cheapest" value="2" />
                  <Tab label="Newest" value="3" />
                  <Button variant="contained" style={{background:"#c4c4c3"}}>
                     <FilterAltIcon/> Filter
                  </Button> 
                </TabList>
                </Grid>
              </Grid>
            </Box>
          <TabPanel value="1">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image="images/default.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lorem Ipsum <span>1.20 Weth</span>
                    </Typography>
                  </CardContent>
                  <button className="viewButton">View</button>
                </Card>
              </Grid>
              <Grid item xs={4}>
              <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image="images/default.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lorem Ipsum <span>1.20 Weth</span>
                    </Typography>
                  </CardContent>
                  <button className="viewButton">View</button>
                </Card>
              </Grid>
              <Grid item xs={4}>
              <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image="images/default.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lorem Ipsum <span>1.20 Weth</span>
                    </Typography>
                  </CardContent>
                  <button className="viewButton">View</button>
                </Card>
              </Grid>
            </Grid>
            </Box>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} sectionBox meetTeamSection ourInsights`}>
          <h2 className={utilStyles.headingLg}>Our <br/> latest insights</h2>
          <p>simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

          <Box sx={{ flexGrow: 1 }} className="ourInsightsBox">
            <Grid container spacing={0}>
              <Grid item xs={5}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="240"
                      image="images/default.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <p>Natural</p>
                      <Typography gutterBottom variant="h5" component="div">
                        Sarah Smith
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
              <Grid item xs={7} style={{paddingLeft:20}}>
                <Card sx={{ display: 'flex' }} style={{paddingBottom:15}}>
                  <CardMedia
                    component="img"
                    sx={{ width: 270, height: 100 }}
                    image="images/default.png"
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }} style={{paddingLeft:20}}>
                    <CardContent sx={{ flex: '1 0 auto' }} style={{padding:0}}>
                      <Typography component="div" variant="h7">
                        Sarah Smith
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>

                <Card sx={{ display: 'flex' }} style={{paddingBottom:15}}>
                  <CardMedia
                    component="img"
                    sx={{ width: 270, height: 100 }}
                    image="images/default.png"
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }} style={{paddingLeft:20}}>
                    <CardContent sx={{ flex: '1 0 auto' }} style={{padding:0}}>
                      <Typography component="div" variant="h7">
                        Sarah Smith
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>

                <Card sx={{ display: 'flex' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 270, height: 100 }}
                    image="images/default.png"
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }} style={{paddingLeft:20}}>
                    <CardContent sx={{ flex: '1 0 auto' }} style={{padding:0}}>
                      <Typography component="div" variant="h7">
                        Sarah Smith
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} sectionBox footer`}>
          <h2 className={utilStyles.headingLg}>Logo</h2>
          <Box sx={{ flexGrow: 1 }} className="footerNavbar">
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Link href="#" underline="none">
                  Terms of Conditions
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link href="#" underline="none">
                  Community
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link href="#" underline="none">
                  Careers
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link href="#" underline="none">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Box>
          <p>@ name 20022. All rights reserved.</p>
        </section>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
