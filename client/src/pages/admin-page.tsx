import { useAuth } from "@/lib/auth-context";
import { Navbar } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocation } from "wouter";
import { MoreHorizontal, ShieldAlert, CheckCircle, XCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  if (!user || user.role !== "admin") {
    // Redirect to home if not admin (or dashboard if user)
    if (user) setLocation("/dashboard");
    else setLocation("/auth");
    return null;
  }

  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "User", status: "Active", date: "2023-10-23" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Inactive", date: "2023-10-25" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Admin", status: "Active", date: "2023-10-21" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", role: "User", status: "Active", date: "2023-11-01" },
    { id: 5, name: "Evan Wright", email: "evan@example.com", role: "User", status: "Suspended", date: "2023-11-05" },
  ];

  return (
    <div className="min-h-screen bg-muted/10 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 p-4 md:p-8 pt-6">
        <div className="container mx-auto max-w-7xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-heading">Admin Portal</h2>
              <p className="text-muted-foreground">
                Manage users, permissions, and system settings.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                   <CardTitle>Users</CardTitle>
                   <CardDescription>
                     Manage user access and account status.
                   </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                   <div className="relative">
                     <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                     <Input
                       type="search"
                       placeholder="Search users..."
                       className="pl-8 w-[200px] lg:w-[300px]"
                     />
                   </div>
                   <Button>Add User</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="flex items-center gap-3">
                         <Avatar className="h-8 w-8">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.email}`} alt={u.name} />
                            <AvatarFallback>{u.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-medium">{u.name}</span>
                            <span className="text-xs text-muted-foreground">{u.email}</span>
                          </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={u.role === 'Admin' ? "border-primary text-primary" : ""}>
                          {u.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {u.status === 'Active' && <CheckCircle className="h-4 w-4 text-green-500" />}
                          {u.status === 'Inactive' && <XCircle className="h-4 w-4 text-muted-foreground" />}
                          {u.status === 'Suspended' && <ShieldAlert className="h-4 w-4 text-red-500" />}
                          <span>{u.status}</span>
                        </div>
                      </TableCell>
                      <TableCell>{u.date}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(u.email)}>
                              Copy Email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Suspend User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
