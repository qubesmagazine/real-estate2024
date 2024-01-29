import { useState } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";

const ImageScrollbar = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(3); // Adjust this value as needed
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}>
      {data.map((item, index) => (
        <Link
          key={item.id}
          to={item.id}
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          onSetActive={() => setSelectedItem(item.id)}
          onSetInactive={() => setSelectedItem(null)}
        >
          <Box
            key={item.id}
            display="inline-block"
            width="910px"
            itemId={item.id}
            overflow="hidden"
            p="1"
          >
            <Image
              alt="property"
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              sizes="(max-width: 500px) 100px, (max-width):1023px 400px, 1000px"
            />
          </Box>
        </Link>
      ))}
    </div>
  );
};

export default ImageScrollbar;

