#version 430 core

// Buffer containing the rendered image
layout (binding = 0, r32ui) uniform uimage2D output_image;

// This is the output color
layout (location = 0) out vec4 fragColor;

void main(void)
{
    fragColor = vec4(imageLoad(output_image, ivec2(gl_FragCoord.xy)).xxxx) / 32.0;
}
