import React from "react";
import { Button as OctaButton } from "@seifeldinio/octa-ui";

// Define the component definitions
const octaButtonComponents = {
  default: <OctaButton variant={"default"}>Press me</OctaButton>,
  material: <OctaButton variant={"material"}>Press me</OctaButton>,
  materialSecondary: (
    <OctaButton variant={"materialSecondary"}>Press me</OctaButton>
  ),
  destructive: <OctaButton variant={"destructive"}>Press me</OctaButton>,
  outline: <OctaButton variant={"outline"}>Press me</OctaButton>,
  ghost: <OctaButton variant={"ghost"}>Press me</OctaButton>,
  glass: <OctaButton variant={"glass"}>Press me</OctaButton>,
  key: <OctaButton variant={"key"}>Press me</OctaButton>,
  gradient: <OctaButton variant={"gradient"}>Press me</OctaButton>,
};

// Define the array with titles and variant keys
export const octaButtonVariants = [
  {
    title: "Key",
    variant: "key",
    component: octaButtonComponents.key,
  },
  {
    title: "Material",
    variant: "material",
    component: octaButtonComponents.material,
  },
  {
    title: "Material II",
    variant: "materialSecondary",
    component: octaButtonComponents.materialSecondary,
  },
  {
    title: "Glass",
    variant: "glass",
    component: octaButtonComponents.glass,
  },

  {
    title: "Gradient",
    variant: "gradient",
    component: octaButtonComponents.gradient,
  },
  {
    title: "Outline",
    variant: "outline",
    component: octaButtonComponents.outline,
  },
  {
    title: "Default",
    variant: "default",
    component: octaButtonComponents.default,
  },
  {
    title: "Ghost",
    variant: "ghost",
    component: octaButtonComponents.ghost,
  },
];
