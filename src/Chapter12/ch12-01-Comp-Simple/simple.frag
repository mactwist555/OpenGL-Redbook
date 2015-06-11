#version 430 core

layout (location = 0) out vec4 fragColor;

uniform sampler2D output_image;

void main(void)
{
   fragColor = texture( output_image, vec2(gl_FragCoord.xy) / vec2(textureSize(output_image, 0)) );
}