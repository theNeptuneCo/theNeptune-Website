import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">About theNeptune</h2>
              <p className="text-muted-foreground">
                Founded in 2020, theNeptune has grown from a small freelancing group to a leading software development agency. We're passionate about creating innovative solutions that help businesses succeed in an increasingly digital world.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Expert Team</h3>
                  <p className="text-muted-foreground">Our team consists of experienced developers, designers, and project managers who are experts in their fields.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Agile Methodology</h3>
                  <p className="text-muted-foreground">We follow agile development practices to ensure flexibility, transparency, and continuous improvement throughout the project lifecycle.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Client-Centric Approach</h3>
                  <p className="text-muted-foreground">We prioritize understanding your business needs and goals to deliver solutions that drive real value and results.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Quality Assurance</h3>
                  <p className="text-muted-foreground">Rigorous testing and quality control processes ensure that our software is reliable, secure, and performs optimally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}