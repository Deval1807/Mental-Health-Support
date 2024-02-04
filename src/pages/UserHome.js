import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import image1 from "../images/image1.jpeg";

export default function UserHome() {
  return (
    <>
      <div className="mb-16">
        <Navbar />
      </div>
      <div className="mb-4">
        <Card sx={{ minWidth: 275 }} className="mt-4 mb-4">
          <div>
            <CardContent>
              <div className="container mx-auto flex justify-between items-center">
                <div >
                  Welcome to WellNest
                </div>
                <div className="flex space-x-4">
                  <Typography variant="h6" component="div">
                    <AddCircleIcon />
                    Add a post
                  </Typography>
                  <div className="flex">
                    <Avatar
                      alt=""
                      src={image1}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography variant="h6" component="div">
                      User me
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
        <Divider />
      </div>
      <div className="">
        <Card sx={{ minWidth: 275 }} className="mt-4 mb-4 ml-7 mr-7">
          <div>
            <CardContent>
              <div className="flex">
                <Avatar alt="" src={image1} sx={{ width: 32, height: 32 }} />
                <Typography variant="h5" component="div">
                  User x
                </Typography>
              </div>
              <Typography variant="body2" className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                convallis blandit nibh in pharetra. Nam nunc dui, varius maximus
                aliquam sit amet, semper id elit. Sed ultrices dictum mi eu
                suscipit. Etiam est mauris, auctor at auctor eu, porttitor
                imperdiet magna. Suspendisse et ipsum ac lacus congue facilisis
                vitae id ante. Suspendisse fermentum lacus dolor. Nunc pulvinar
                tellus vitae metus dictum luctus. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Sed mattis, ipsum in tristique elementum, magna sapien rhoncus
                turpis, vitae efficitur urna sem sit amet nulla. Etiam quis
                tellus sit amet ligula pellentesque imperdiet. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Aliquam convallis blandit
                nibh in pharetra. Nam nunc dui, varius maximus aliquam sit amet,
                semper id elit. Sed ultrices dictum mi eu suscipit. Etiam est
                mauris, auctor at auctor eu, porttitor imperdiet magna.
                Suspendisse et ipsum ac lacus congue facilisis vitae id ante.
                Suspendisse fermentum lacus dolor. Nunc pulvinar tellus vitae
                metus dictum luctus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Sed mattis,
                ipsum in tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam convallis blandit nibh in
                pharetra. Nam nunc dui, varius maximus aliquam sit amet, semper
                id elit. Sed ultrices dictum mi eu suscipit. Etiam est mauris,
                auctor at auctor eu, porttitor imperdiet magna. Suspendisse et
                ipsum ac lacus congue facilisis vitae id ante. Suspendisse
                fermentum lacus dolor. Nunc pulvinar tellus vitae metus dictum
                luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed mattis, ipsum in
                tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet.
              </Typography>
            </CardContent>
          </div>
        </Card>
        <Divider />
        <Card sx={{ minWidth: 275 }} className="mt-4 mb-4 ml-7 mr-7">
          <div>
            <CardContent>
              <div className="flex">
                <Avatar alt="" src={image1} sx={{ width: 32, height: 32 }} />
                <Typography variant="h5" component="div">
                  User y
                </Typography>
              </div>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                convallis blandit nibh in pharetra. Nam nunc dui, varius maximus
                aliquam sit amet, semper id elit. Sed ultrices dictum mi eu
                suscipit. Etiam est mauris, auctor at auctor eu, porttitor
                imperdiet magna. Suspendisse et ipsum ac lacus congue facilisis
                vitae id ante. Suspendisse fermentum lacus dolor. Nunc pulvinar
                tellus vitae metus dictum luctus. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Sed mattis, ipsum in tristique elementum, magna sapien rhoncus
                turpis, vitae efficitur urna sem sit amet nulla. Etiam quis
                tellus sit amet ligula pellentesque imperdiet. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Aliquam convallis blandit
                nibh in pharetra. Nam nunc dui, varius maximus aliquam sit amet,
                semper id elit. Sed ultrices dictum mi eu suscipit. Etiam est
                mauris, auctor at auctor eu, porttitor imperdiet magna.
                Suspendisse et ipsum ac lacus congue facilisis vitae id ante.
                Suspendisse fermentum lacus dolor. Nunc pulvinar tellus vitae
                metus dictum luctus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Sed mattis,
                ipsum in tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam convallis blandit nibh in
                pharetra. Nam nunc dui, varius maximus aliquam sit amet, semper
                id elit. Sed ultrices dictum mi eu suscipit. Etiam est mauris,
                auctor at auctor eu, porttitor imperdiet magna. Suspendisse et
                ipsum ac lacus congue facilisis vitae id ante. Suspendisse
                fermentum lacus dolor. Nunc pulvinar tellus vitae metus dictum
                luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed mattis, ipsum in
                tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet.
              </Typography>
            </CardContent>
          </div>
        </Card>
        <Divider />
        <Card sx={{ minWidth: 275 }} className="mt-4 mb-4 ml-7 mr-7">
          <div>
            <CardContent>
              <div className="flex">
                <Avatar alt="" src={image1} sx={{ width: 32, height: 32 }} />
                <Typography variant="h5" component="div">
                  User z
                </Typography>
              </div>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                convallis blandit nibh in pharetra. Nam nunc dui, varius maximus
                aliquam sit amet, semper id elit. Sed ultrices dictum mi eu
                suscipit. Etiam est mauris, auctor at auctor eu, porttitor
                imperdiet magna. Suspendisse et ipsum ac lacus congue facilisis
                vitae id ante. Suspendisse fermentum lacus dolor. Nunc pulvinar
                tellus vitae metus dictum luctus. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Sed mattis, ipsum in tristique elementum, magna sapien rhoncus
                turpis, vitae efficitur urna sem sit amet nulla. Etiam quis
                tellus sit amet ligula pellentesque imperdiet. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Aliquam convallis blandit
                nibh in pharetra. Nam nunc dui, varius maximus aliquam sit amet,
                semper id elit. Sed ultrices dictum mi eu suscipit. Etiam est
                mauris, auctor at auctor eu, porttitor imperdiet magna.
                Suspendisse et ipsum ac lacus congue facilisis vitae id ante.
                Suspendisse fermentum lacus dolor. Nunc pulvinar tellus vitae
                metus dictum luctus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Sed mattis,
                ipsum in tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam convallis blandit nibh in
                pharetra. Nam nunc dui, varius maximus aliquam sit amet, semper
                id elit. Sed ultrices dictum mi eu suscipit. Etiam est mauris,
                auctor at auctor eu, porttitor imperdiet magna. Suspendisse et
                ipsum ac lacus congue facilisis vitae id ante. Suspendisse
                fermentum lacus dolor. Nunc pulvinar tellus vitae metus dictum
                luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed mattis, ipsum in
                tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet.
              </Typography>
            </CardContent>
          </div>
        </Card>
        <Divider />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
