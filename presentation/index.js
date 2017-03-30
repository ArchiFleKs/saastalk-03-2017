// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  osones: require("../assets/OSONES_LOGO.png"),
  aws_v: require("../assets/aws_v.png"),
  osones_nfw: require("../assets/OSONES_LOGO_NOFRAME_W.png"),
  osones_w: require("../assets/OSONES_LOGO_W.png"),
  osones_e: require("../assets/logo-osones-expertise.png"),
  osones_pnf: require("../assets/OSONES_PICTO_NOFRAME.png"),
  swarm: require("../assets/swarm.png"),
  cloudwatch: require("../assets/cloudwatch.png"),
  cloudwatch_k8s1: require("../assets/cloudwatch_k8s1.png"),
  cloudwatch_k8s2: require("../assets/cloudwatch_k8s2.png"),
  mesos: require("../assets/mesos-logo.png"),
  kubernetes: require("../assets/kubernetes-logo.png"),
  kubernetes_v: require("../assets/kubernetes_v.png"),
  kubernetes_h: require("../assets/kubernetes_h.png"),
  Træfɪk_v: require("../assets/traefik_v.png"),
  dcos: require("../assets/dcos.png"),
  come: require("../assets/come.gif"),
  morbier: require("../assets/morbier.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#b50000",
  tertiary: "#076678",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} progress="bar" transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Scaling
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            Kubernetes services on AWS
          </Heading>
          <Text margin="40px auto auto" caps textColor="tertiary">
            and just git push...
          </Text>
          <Text caps textColor="tertiary">
            ...but after a bunch of stuff.
          </Text>
          <Layout>
            <Fill>
              <Image src={images.aws_v.replace("/", "")} margin="1.5em auto auto" height="100px"/>
            </Fill>
            <Fill>
              <Image src={images.kubernetes_v.replace("/", "")} margin="1.5em auto auto" height="100px"/>
            </Fill>
            <Fill>
              <Image src={images.Træfɪk_v.replace("/", "")} margin="1.5em auto auto" height="100px"/>
            </Fill>
          </Layout>
          <Heading size={1} fit caps margin="50px auto auto" textColor="tertiary">
            Kevin Lefevre - SaaS Tech Talk #3 - 30/03/2017
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear>
          <Heading size={4} margin="30px auto auto" caps textColor="secondary">
            Scaling Kubernetes
          </Heading>
          </Appear>
          <Appear>
          <Heading size={4} margin="30px auto auto" caps textColor="secondary">
            Publishing applications
          </Heading>
          </Appear>
          <Appear>
          <Heading size={4} margin="30px auto auto" caps textColor="secondary">
            Integrating with CI
          </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            whoami
          </Heading>
          <Text margin="40px auto auto" textColor="tertiary">Cloud and Devops Engineer<Link textColor="secondary" href="https://twitter.com/osones"> @osones</Link></Text>
          <Link href="https://osones.com"><Image src={images.osones_e.replace("/", "")} margin="20px auto auto" height="100px"/></Link>
          <Text margin="20px auto auto" textColor="tertiary">Work on OpenStack and AWS</Text>
          <Text margin="40px auto auto" textColor="tertiary">I ❤  Docker and K8s</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            K8s at a glance
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.kubernetes_h.replace("/", "")} margin="1.5em auto auto" height="150px"/>
            </Fill>
          </Layout>
          <List margin="20px auto auto" textColor="tertiary">
            <ListItem>COE: Container Orchestration Engine</ListItem>
            <ListItem>Open-Sourced by Google in 2014</ListItem>
            <ListItem>Quick adoption</ListItem>
            <ListItem>Infrastructure agnostic</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            K8s at a glance
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            COE examples
          </Heading>
          <Image src={images.kubernetes.replace("/", "")} height="200" padding="10"/>
          <Image src={images.swarm.replace("/", "")} height="200" padding="10"/>
          <Image src={images.mesos.replace("/", "")} height="200"padding="10"/>
          <Image src={images.dcos.replace("/", "")} height="200"padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Where and how
          </Heading>
          <Heading size={5} caps margin="30px auto auto" textColor="tertiary">
            Private and public Clouds
          </Heading>
          <Text textColor="tertiary" margin="30px auto auto" fit caps>Magnum - Kops - Kargo - Kubeadm - Kube-aws</Text>
          <Text textColor="secondary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin="30px auto auto">Cluster Deployment</Text>
          <Text textColor="tertiary" margin="30px auto auto">Cluster life cycle</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            kube-aws
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.3em">Pure AWS CloudFormation Stack</ListItem>
            <ListItem textSize="1.3em">Heavy development</ListItem>
            <ListItem textSize="1.3em">Easily tunable</ListItem>
            <ListItem textSize="1.3em">Uses CoreOS ❤ </ListItem>
          </List>
          <CodePane
            lang="Bash"
            source={require("raw-loader!../assets/kube-aws.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            kube-aws
          </Heading>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/cluster.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            kube-aws
          </Heading>
          <CodePane
            lang="Bash"
            source={require("raw-loader!../assets/kube-aws2.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Scaling K8s
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Different level of scaling
          </Heading>
          <List textColor="tertiary">
            <ListItem>Vertical scaling: Worker nodes</ListItem>
            <ListItem>Horizontal scaling: PODs / Containers </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Vertical scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            AWS driven
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.2em">Leverage CloudWatch metric</ListItem>
            <ListItem textSize="1.2em">Scale up/down ASG on AWS</ListItem>
            <ListItem textSize="1.2em">CloudWatch is not K8s aware</ListItem>
            <ListItem textSize="1.2em">Requires fine tuning</ListItem>
          </List>
          <Image src={images.cloudwatch.replace("/", "")} margin="auto auto auto" height="200px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Vertical scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            K8s driven
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1em">Talks directly to Kubernetes</ListItem>
            <ListItem textSize="1em">Scales up/down ASG via AWS API</ListItem>
            <ListItem textSize="1em">K8s aware: running on K8s itself</ListItem>
            <ListItem textSize="1em">Scales when PODs cannot be scheduled</ListItem>
          </List>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/autoscaler.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Vertical scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            K8s driven
          </Heading>
          <Image src={images.cloudwatch_k8s1.replace("/", "")} margin="15px auto auto" height="270px"/>
          <Image src={images.cloudwatch_k8s2.replace("/", "")} margin="auto 15px auto" height="270px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Horizontal scaling
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Horizontal Pod Autoscaler
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Kubernetes API object</ListItem>
            <ListItem textSize="1.1em">Watch PODs based on resources</ListItem>
            <ListItem textSize="1.1em">Linked to a deployment object</ListItem>
            <ListItem textSize="1.1em">Scales up/down deployment replicas</ListItem>
          </List>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/horizontalpodautoscaler.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps fit textColor="secondary">
            Publishing an application
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            How it all fits
          </Heading>
          <Text textColor="tertiary" margin="30px auto auto" caps>Ingress (L7 LB)</Text>
          <Text textColor="secondary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin="30px auto auto" caps>Service (L4 LB, asbtract PODs)</Text>
          <Text textColor="secondary" margin="30px auto auto" textSize="1.5em">▼</Text>
          <Text textColor="tertiary" margin="30px auto auto" caps>Deployment (a bunch of PODs)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps fit textColor="secondary">
            Publishing an application
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Ingress Controller
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Acts as an L7 load balancer</ListItem>
            <ListItem textSize="1.1em">Watches Kubernetes API for ingress rules</ListItem>
            <ListItem textSize="1.1em">Handles TLS termination</ListItem>
            <ListItem textSize="1.1em">Handles routing rules</ListItem>
          </List>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/ingressrule.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps fit textColor="secondary">
            Publishing an application
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Service
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Acts as an L4 load balancer</ListItem>
            <ListItem textSize="1.1em">Abstract PODs</ListItem>
            <ListItem textSize="1.1em">PODs are not reached directly</ListItem>
          </List>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/service.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Træfɪk
          </Heading>
          <Image src={images.morbier.replace("/", "")} padding="5" height="200px"/>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Cloud reverse proxy</ListItem>
            <ListItem textSize="1.1em">Ingress controller</ListItem>
            <ListItem textSize="1.1em">Watches Kubernetes API for ingress rules</ListItem>
            <ListItem textSize="1.1em">Let's encrypt</ListItem>
            <ListItem textSize="1.1em">HA with K/V</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Træfɪk
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Let's Encrypt
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">On demand TLS certs</ListItem>
            <ListItem textSize="1.1em">Auto renewal</ListItem>
            <ListItem textSize="1.1em">Hard to HA</ListItem>
            <ListItem textSize="1.1em">Challenge storage</ListItem>
            <ListItem textSize="1.1em">Cert storage</ListItem>
          </List>
          <Text caps fit textColor="secondary">Træfɪk uses a K/V store ❤</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Træfɪk
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Act as in entrypoint for the cluster</ListItem>
            <ListItem textSize="1.1em">Can be autoscale like any other deployment</ListItem>
            <ListItem textSize="1.1em">Configuration backed in Consul or Etcd</ListItem>
            <ListItem textSize="1.1em">Free and automated TLS cert</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Integrating with CI
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.3em">
              Cluster is composed of:
                <List textColor="tertiary">
                  <ListItem textSize="2rem" margin="15px 30px auto">Kubernetes system services</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">Træfɪk as an ingress controller</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">Dev / Preprod / Prod namespaces</ListItem>
                </List>
            </ListItem>
            <ListItem margin="15px auto auto" textSize="1.1em">
              CI system acts as a templating tools:
                <List textColor="tertiary">
                  <ListItem textSize="2rem" margin="15px 30px auto">For Service</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">For Ingress</ListItem>
                  <ListItem textSize="2rem" margin="15px 30px auto">For Deployment</ListItem>
                </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Integrating with CI
          </Heading>
          <Heading size={4} caps textColor="tertiary">
            Git push workflow
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Run tests</ListItem>
            <ListItem textSize="1.1em">Build docker images for the app</ListItem>
            <ListItem textSize="1.1em">Test the images</ListItem>
            <ListItem textSize="1.1em">Push images into registry: ECR</ListItem>
            <ListItem textSize="1.1em">Ensure cluster is idempotent</ListItem>
            <ListItem textSize="1.1em">Rolling update the app</ListItem>
            <ListItem textSize="1.1em">All of this is done per branch</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textColor="secondary" size={3} caps fit>
            Conclusion
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={3} caps>
            Thank you!
          </Heading>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://github.com/ArchiFleKs">@ArchiFleKs</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://archifleks.github.io/saastalk-03-2017">archifleks.github.io/saastalk-03-2017</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://osones.com">osones.com</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" margin="10px auto auto" href="https://twitter.com/osones">@osones</Link>
          </Text>
          <Image src={images.come.replace("/", "")} height="250" padding="10"/>
          <Heading textColor="primary" size={4} caps>
            We're hiring!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
